import { create } from 'zustand';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { produce } from 'immer';


// !! Needs check if appData actually changed before pushing to DB.

// Zustand store for managing app data
const useStore = create((set: any, get: any) => ({
  appData: {} as any,  // initial state
  setAppData: (newData: any) => {
    set({ appData: newData });
    get().syncWithSupabase(newData); // Trigger sync with Supabase after updating appData
  },
  syncWithSupabase: async (data: any) => {
    const supabase = createClientComponentClient();
    const { data: { session } } = await supabase.auth.getSession();

    if (session?.user) {
      // Sync the appData to Supabase
      const { error } = await supabase.from('userdata').upsert({
        user_id: session.user.id,
        data,  // Store all app data in Supabase
      });

      if (error) {
        console.error('Error syncing with Supabase:', error.message);
      } else {
        console.log('Data synced with Supabase successfully!');
      }
    } else {
      console.error('No authenticated user found.');
    }
  },
  syncFromSupabase: async () => {
    const supabase = createClientComponentClient();
    const { data: { session } } = await supabase.auth.getSession();

    if (session?.user) {
      const { data, error } = await supabase
        .from('userdata')
        .select('data')
        .eq('user_id', session.user.id)
        .single();

      if (error) {
        console.error('Error fetching data from Supabase:', error.message);
      } else {
        set({ appData: data?.data }); // Set appData to the fetched data
        console.log('Data fetched from Supabase successfully!', data.data);
      }
    } else {
      console.error('No authenticated user found.');
    }
  },
  middlewareSetAppData: (path: any, value: any) => {
    set(produce((draft: any) => {
      // Split the path into keys
      const keys = path.split('.');
      let current = draft.appData;

      // Navigate through the keys to get to the target property
      keys.forEach((key: any, index: any) => {
        if (index === keys.length - 1) {
          // Set the value at the last key
          current[key] = value;
        } else {
          // Create nested object if it doesn't exist
          if (!current[key]) {
            current[key] = {};
          }
          current = current[key]; // Move deeper into the object
        }
      });
    }));
    console.log("{" + path, ", " + value + "}");
    console.log('appData updated:', get().appData);
    get().syncWithSupabase(get().appData); // Sync with Supabase after setting app data
  },
  middlewareReadAppData: (path: string) => {
    const keys = path.split('.');
    let current = get().appData;

    for (const key of keys) {
      if (current[key] !== undefined) {
        current = current[key];
      } else {
        return undefined; // Return undefined if the path does not exist
      }
    }
    return current; // Return the value found at the path
  },

}));


export default useStore;

// Utility function for tracking button clicks with a fail-safe mechanism
export const trackButtonClick = (buttonName: any) => {
  // Check if the window and gtag object exist (fail-safe mechanism)
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    // Send the event to Google Analytics (asynchronously)
    window.gtag('event', 'click', {
      event_category: 'Button',
      event_label: buttonName,
      value: 1,
    });
  } else {
    // Optionally log or handle the case where gtag is not available
    console.log(`Analytics unavailable. Event not sent: ${buttonName}`);
  }
};

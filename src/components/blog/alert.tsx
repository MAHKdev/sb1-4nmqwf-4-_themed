import Container from "@/components/blog/container";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <>
      {preview && <div
        className={cn("border-b dark:bg-slate-800", {
          "bg-neutral-800 border-neutral-800 text-white": preview,
          "bg-neutral-50 border-neutral-200": !preview,
        })}
      >
        <Container>
          <div className="py-2 text-center text-sm">
            {preview ? (
              <>
                technical deep-diving in our {" "}
                <a
                  href={process.env.NEXT_PUBLIC_DOCS_URL}
                  className="underline hover:text-teal-300 duration-200 transition-colors"
                >
                  Documentation
                </a>{" "}
                to exit preview mode.
              </>
            ) : (
              <>
              </>
            )}
          </div>
        </Container>
      </div>}
    </>
  );
};

export default Alert;

import { ThemeToggle } from "./ThemeToggle";

export function ThemeToggleWrapper() {
  return (
    <div className="fixed top-0 right-0 lg:p-4 md:p-3 bg-base-200 z-0">
      <h4 className="text-center text-secondary text-sm">Select theme</h4>
      <ThemeToggle />
    </div>
  );
}

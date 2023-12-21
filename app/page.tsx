import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
const state = true;
export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">
        Discord Clone Test
      </p>
        {/*Comments appear like this because React uses
        JSX, which has HTML-like syntax.*/ }
    {/* Button is created using shadcn library */}
      <Button className = {cn("bg-indigo-500", state&&"bg-red-500")}>Click Me</Button>
    </div>
  )
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ModeToggle } from "@/components/utilcomponents/theme-toggle";

export default function Home() {
  return (
    <main className="">
      <Card>
        <CardHeader>
          <CardTitle>Card Title <ModeToggle /></CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

    </main>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";

// TODO :  Kartlar databse'den dinamik gelecek.

function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-10 flex flex-wrap gap-4 justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>KısaKes AI</CardTitle>
          <CardDescription>AI Based content summarizer tool.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">React , Firebase</Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>
            <a
              target="_blank"
              href="https://kisakes.netlify.app/"
              rel="noopener noreferrer"
            >
              Try It
            </a>
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Screen Recorder</CardTitle>
          <CardDescription>Basic screen recorder works on web.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Vanilla JS</Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>
            {" "}
            <a
              target="_blank"
              href="https://screen-recorderv1.netlify.app"
              rel="noopener noreferrer"
            >
              Try It
            </a>
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>PO Tracker</CardTitle>
          <CardDescription>Prograssive Overload tracker.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">React , Firebase</Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>
            <a
              target="_blank"
              href="https://po-tracker.netlify.app"
              rel="noopener noreferrer"
            >
              Try It
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
export default ProjectsPage;

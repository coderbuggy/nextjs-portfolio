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

// TODO :  Kartlar databse'den dinamik gelecek.

function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-10 flex flex-wrap gap-4 justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>KısaKes AI</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
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
          <Button>Try It</Button>
        </CardFooter>
      </Card>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>KısaKes AI</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
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
          <Button>Try It</Button>
        </CardFooter>
      </Card>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>KısaKes AI</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
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
          <Button>Try It</Button>
        </CardFooter>
      </Card>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>KısaKes AI</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
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
          <Button>Try It</Button>
        </CardFooter>
      </Card>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>KısaKes AI</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
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
          <Button>Try It</Button>
        </CardFooter>
      </Card>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>KısaKes AI</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
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
          <Button>Try It</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
export default ProjectsPage;

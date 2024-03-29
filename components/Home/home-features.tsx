import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

function HomeFeatures() {
  return (
    <div className="w-full grid md:grid-cols-4 gap-5 md:py-20 py-10 md:px-10 px-3">
      <Card>
        <CardHeader className="p-4 gap-6">
          <CardTitle>Latest Vue JS & Next JS</CardTitle>
          <CardDescription>
            Latest Vue JS and Next JS version used with fully functional
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="p-4 gap-6">
          <CardTitle>Mega Menu</CardTitle>
          <CardDescription>
            Mega Menu is the door that has the entrance to every pages of your
            site
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="p-4 gap-6">
          <CardTitle>Responsive Design</CardTitle>
          <CardDescription>
            Flone is super responsive & work perfectly in all devices.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="p-4 gap-6">
          <CardTitle>Real Support</CardTitle>
          <CardDescription>
            We provide 7 days a week one by one real support.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default HomeFeatures;

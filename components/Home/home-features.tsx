import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

function HomeFeatures() {
  return (
    <div className="w-full grid md:grid-cols-4 gap-5 md:py-20 py-10 md:px-10 px-3 text-center">
      <Card>
        <CardHeader className="p-4 gap-6">
          <CardTitle>Free Shipping</CardTitle>
          <CardDescription>
          Free shipping on all order
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="p-4 gap-6">
          <CardTitle>Support 24/7</CardTitle>
          <CardDescription>
          Support 24 hours a day
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="p-4 gap-6">
          <CardTitle>Money Return</CardTitle>
          <CardDescription>
          30 days for free return
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="p-4 gap-6">
          <CardTitle>Order Discount</CardTitle>
          <CardDescription>
          10% off on your first order
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default HomeFeatures;

import ResponsiveDrawer from "../../components/Drawer";
import ImageHeader from "../../components/ImageHeader";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <ResponsiveDrawer header={<ImageHeader />}>{children}</ResponsiveDrawer>
    </>
  );
};

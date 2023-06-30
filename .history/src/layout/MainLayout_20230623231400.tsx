import ResponsiveDrawer from "../components/Drawer";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <ResponsiveDrawer></ResponsiveDrawer>
    </>
  );
};

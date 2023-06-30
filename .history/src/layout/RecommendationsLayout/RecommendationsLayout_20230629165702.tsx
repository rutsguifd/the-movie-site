import ResponsiveDrawer from "../../components/Drawer";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};
export const RecommendationsLayout = ({ children }: Props) => {
  return <ResponsiveDrawer header={"string"}>{children}</ResponsiveDrawer>;
};

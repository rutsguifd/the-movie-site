import ResponsiveDrawer from "../../components/Drawer";
import { RecommendationsHeader } from "../../components/RecommendationsHeader/RecommendationsHeader";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};
export const RecommendationsLayout = ({ children }: Props) => {
  return (
    <ResponsiveDrawer header={<RecommendationsHeader />}>
      {children}
    </ResponsiveDrawer>
  );
};

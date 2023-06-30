import ResponsiveDrawer from "../../components/Drawer";
import { RecommendationsHeader } from "../../components/RecommendationsHeader/RecommendationsHeader";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};
export const RecommendationsLayout = ({ children }: Props) => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <ResponsiveDrawer header={<RecommendationsHeader />}>
        {children}
      </ResponsiveDrawer>
    </div>
  );
};

import DishDetail from "./DishDetail";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import { useParams } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Main() {
  const { dishes, comments, promotions, leaders } = useSelector(
    (store) => store
  );

  const HomePage = () => {
    return (
      <Home
        dish={dishes.find((dish) => dish.featured)}
        promotion={promotions.find((promo) => promo.featured)}
        leader={leaders.find((leader) => leader.featured)}
      />
    );
  };

  const DishWithId = () => {
    const { dishId } = useParams();

    return (
      <DishDetail
        dish={dishes.find((dish) => dish.id === Number(dishId))}
        comments={comments.filter(
          (comment) => comment.dishId === Number(dishId)
        )}
      />
    );
  };

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/menu" element={<Menu dishes={dishes} />} />
        <Route exact path="/contactus" element={<Contact />} />
        <Route exact path="/menu/:dishId" element={<DishWithId />} />
        <Route exact path="/aboutus" element={<About leaders={leaders} />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import DishDetail from "./DishDetail";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";

export default function Main() {
  const [state, setState] = useState({
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    selectedDish: null,
  });

  const onDishSelect = (dishId) => setState({ ...state, selectedDish: dishId });

  const HomePage = () => {
    return (
      <Home
        dish={state.dishes.find((dish) => dish.featured)}
        promotion={state.promotions.find((promo) => promo.featured)}
        leader={state.leaders.find((leader) => leader.featured)}
      />
    );
  };

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route
          exact
          path="/menu"
          element={<Menu dishes={state.dishes} onClick={onDishSelect} />}
        />
        <Route exact path="/contactus" element={<Contact />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      {/* <DishDetail
        dish={state.dishes.find((dish) => dish.id === state.selectedDish)}
      /> */}
      <Footer />
    </>
  );
}

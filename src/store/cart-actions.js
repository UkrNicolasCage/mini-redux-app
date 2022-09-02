import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://for-redux-study-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not detch cart data!");
      }

      const data = response.json();

      return data;
    };
    try {
      const cartData = await  fetchData();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity || 0,
      }));
    } catch (e) {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );
    fetch("https://for-redux-study-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Sending cart data failed.");
        } else {
          dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Success",
              message: "Successfully sent",
            })
          );
        }
      })
      .catch(() => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "Sending cart data failed",
          })
        );
      });
  };
};

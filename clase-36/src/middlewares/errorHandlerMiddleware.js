export const errorHandler = (err, req, res, next) => {
  if (err.status) {
    return res.render("400", { message: "Error de solicitud" });
  } else if (err.status == 500) {
    return res
      .status(500)
      .render("500", { message: "Error interno del servidor" });
  }
  next(err);
};

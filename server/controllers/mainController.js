/**
 * Get Homepage
 */
exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJS Notes",
    description: "NodejS Noting App",
  };

  req.render("index", locals); //Renders index.ejs with "main" layout
};

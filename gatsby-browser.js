exports.onRouteUpdate = () => {
  const main = document.querySelector('#main');
  if (main) {

    main.scrollTo(0, 0);
  }
}

exports.shouldUpdateScroll = args => {
   return false;
};

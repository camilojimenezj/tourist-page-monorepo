const socket = io();

export const loadComments = (callback) => {
  socket.on("server:loadcomments", callback);
};

export const saveComment = (name, comment, place) => {
  socket.emit("client:newcomment", {
    name,
    comment,
    place,
  });
};

export const onNewComment = (callback) => {
  socket.on("server:newcomment", callback);
};

export const requireComments = (place) => {
  socket.emit("client:requirecomments", place);
};

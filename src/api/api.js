export function Api(http) {
  return {
    all: () => {
      return http.get('/');
    },
    applyFilter : (filters) => {
      console.log(filters)
      return http.get(filters);
    },
  };
}

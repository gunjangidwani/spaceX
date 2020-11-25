export function Api(http) {
  return {
    applyFilter : (filters) => {
      console.log(filters)
      return http.get(filters);
    },
  };
}

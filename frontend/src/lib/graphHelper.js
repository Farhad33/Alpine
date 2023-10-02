
export const clientsWithSameTestDate = (data) => {
    const clientsWithSameDate = {};

    data.forEach((d) => {
      const { client_id, date_testing } = d;
      if (!clientsWithSameDate[date_testing]) {
        clientsWithSameDate[date_testing] = [client_id];
      } else {
        clientsWithSameDate[date_testing].push(client_id);
      }
    });
    
    const [longestClientsDate, longestClientsArray] = Object.entries(clientsWithSameDate).reduce(
        ([longestDate, longestArray], [date, clientsArray]) =>
          clientsArray.length > longestArray.length ? [date, clientsArray] : [longestDate, longestArray],
        ["", []]
      );

    return { longestClientsDate, longestClientsArray }
      
}

function getTickets(ticketsArr, sortingCriteria) {
 
    class Ticket {
      constructor(destination, price, status) {
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
      }
    }
 
    let tickets = [];
 
    for (let ticket of ticketsArr) {
      let info = ticket.split('|');
      tickets.push(new Ticket(...info))
    }

    let sorted = tickets.sort((a, b) => {
       return (
          isNaN(a[sortingCriteria]) ?
          a[sortingCriteria].localeCompare(b[sortingCriteria]) :
          a[sortingCriteria] - b[sortingCriteria]
        )
    })

    return sorted;
}
getTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
)


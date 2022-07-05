class Customer {
  constructor(id, name, address, telephone) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.telephone = telephone;
  }

  toStringFormat() {
    return `<tr><td>${this.id}</td><td>${this.name}</td><td>${this.address}</td><td>${this.telephone}</td></tr>`;
  }
}

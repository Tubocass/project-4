import { SimpleDate } from './Date';

/*
    @Id
	private LocalDate date;
	@Column(name = "total_sales")
	private int salesTotal; //All sales total. This could just be a method...
	@Column(name = "in_store_sales")
	private int inStoreTotal; //money taken in store as cash or credit
	@Column(name = "online_sales")
	private int onlineTotal; //money taken online
	//pickup and delivery totals. these could come from online or in-store
*/

export class SalesFigure{
    date:SimpleDate;
    onlineTotal:number;
    inStoreTotal:number;
    salesTotal:number;

    constructor(date:SimpleDate, online:number, store:number){
        this.date = date;
        this.onlineTotal = online;
        this.inStoreTotal = store;
        this.salesTotal = this.onlineTotal + this.inStoreTotal;
    }
}
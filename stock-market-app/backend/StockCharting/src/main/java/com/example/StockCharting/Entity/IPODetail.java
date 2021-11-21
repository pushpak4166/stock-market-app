package com.example.StockCharting.Entity;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = "company_id") })
public class IPODetail {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(nullable = false)
	private Double pricePerShare;

	@Column(nullable = false)
	private Long totalNumberOfShares;

	private LocalDateTime openDateTime;

	@OneToOne(fetch = FetchType.LAZY)//, cascade = CascadeType.ALL
	private Company company;

	@ManyToMany
	private List<StockExchange> stockExchanges = new ArrayList<>();

	protected IPODetail() {
	}

	public IPODetail(double pricePerShare, Long totalNumberOfShares, LocalDateTime openDateTime) {
		super();
		this.pricePerShare = pricePerShare;
		this.totalNumberOfShares = totalNumberOfShares;
		this.openDateTime = openDateTime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getPricePerShare() {
		return pricePerShare;
	}

	public void setPricePerShare(Double pricePerShare) {
		this.pricePerShare = pricePerShare;
	}

	public Long getTotalNumberOfShares() {
		return totalNumberOfShares;
	}

	public void setTotalNumberOfShares(Long totalNumberOfShares) {
		this.totalNumberOfShares = totalNumberOfShares;
	}

	public LocalDateTime getOpenDateTime() {
		return openDateTime;
	}

	public void setOpenDateTime(LocalDateTime openDateTime) {
		this.openDateTime = openDateTime;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public List<StockExchange> getStockExchanges() {
		return stockExchanges;
	}

	public void setStockExchanges(List<StockExchange> stockExchanges) {
		this.stockExchanges = stockExchanges;
	}

}
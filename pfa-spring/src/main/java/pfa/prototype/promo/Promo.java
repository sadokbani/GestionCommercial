/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pfa.prototype.promo;

import pfa.prototype.promotion.Promotion;
import pfa.prototype.produit.Produit;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name = "promo")
@NamedQueries({
    @NamedQuery(name = "Promo.findAll", query = "SELECT p FROM Promo p")})
public class Promo implements Serializable {


    @EmbeddedId
    protected PromoPK promoPK;
    @Column(name = "dateDeb")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateDeb;
    @Column(name = "dateFin")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateFin;
    @Column(name = "pourcentage")
    private Integer pourcentage;
    @JoinColumn(name = "promoId", referencedColumnName = "promoId", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Promotion promotion;
    @JoinColumn(name = "prodId", referencedColumnName = "prodId", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Produit produit;

    public Promo() {
    }

    public Promo(PromoPK promoPK) {
        this.promoPK = promoPK;
    }

    public Promo(int promoId, int prodId) {
        this.promoPK = new PromoPK(promoId, prodId);
    }

    public PromoPK getPromoPK() {
        return promoPK;
    }

    public void setPromoPK(PromoPK promoPK) {
        this.promoPK = promoPK;
    }

    public Date getDateDeb() {
        return dateDeb;
    }

    public void setDateDeb(Date dateDeb) {
        this.dateDeb = dateDeb;
    }

    public Date getDateFin() {
        return dateFin;
    }

    public void setDateFin(Date dateFin) {
        this.dateFin = dateFin;
    }

    public Integer getPourcentage() {
        return pourcentage;
    }

    public void setPourcentage(Integer pourcentage) {
        this.pourcentage = pourcentage;
    }

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }

    public Produit getProduit() {
        return produit;
    }

    public void setProduit(Produit produit) {
        this.produit = produit;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (promoPK != null ? promoPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Promo)) {
            return false;
        }
        Promo other = (Promo) object;
        if ((this.promoPK == null && other.promoPK != null) || (this.promoPK != null && !this.promoPK.equals(other.promoPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "finall.Promo[ promoPK=" + promoPK + " ]";
    }
    
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pfa.prototype.promo;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;


@Embeddable
public class PromoPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "promoId")
    private int promoId;
    @Basic(optional = false)
    @NotNull
    @Column(name = "prodId")
    private int prodId;

    public PromoPK() {
    }

    public PromoPK(int promoId, int prodId) {
        this.promoId = promoId;
        this.prodId = prodId;
    }

    public int getPromoId() {
        return promoId;
    }

    public void setPromoId(int promoId) {
        this.promoId = promoId;
    }

    public int getProdId() {
        return prodId;
    }

    public void setProdId(int prodId) {
        this.prodId = prodId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) promoId;
        hash += (int) prodId;
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof PromoPK)) {
            return false;
        }
        PromoPK other = (PromoPK) object;
        if (this.promoId != other.promoId) {
            return false;
        }
        if (this.prodId != other.prodId) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "finall.PromoPK[ promoId=" + promoId + ", prodId=" + prodId + " ]";
    }
    
}

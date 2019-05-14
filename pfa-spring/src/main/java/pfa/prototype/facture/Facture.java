/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pfa.prototype.facture;

import pfa.prototype.commande.Commande;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "facture")
@NamedQueries({
    @NamedQuery(name = "Facture.findAll", query = "SELECT f FROM Facture f")})
public class Facture implements Serializable {


    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    @Column(name = "factId")
    private Integer factId;
    @Column(name = "dateFact")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateFact;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "total")
    private Float total;
    @JoinColumn(name = "commandeId", referencedColumnName = "commandeId")
    @OneToOne
    private Commande commandeId;


    public Facture() {
    }

    public Facture(Date dateFact, Float total, Commande commandeId) {
        this.dateFact = dateFact;
        this.total = total;
        this.commandeId = commandeId;
    }

    public Integer getFactId() {
        return factId;
    }

    public void setFactId(Integer factId) {
        this.factId = factId;
    }

    public Date getDateFact() {
        return dateFact;
    }

    public void setDateFact(Date dateFact) {
        this.dateFact = dateFact;
    }

    public Float getTotal() {
        return total;
    }

    public void setTotal(Float total) {
        this.total = total;
    }

    public Commande getCommandeId() {
        return commandeId;
    }

    public void setCommandeId(Commande commandeId) {
        this.commandeId = commandeId;
    }



    @Override
    public int hashCode() {
        int hash = 0;
        hash += (factId != null ? factId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Facture)) {
            return false;
        }
        Facture other = (Facture) object;
        if ((this.factId == null && other.factId != null) || (this.factId != null && !this.factId.equals(other.factId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "finall.Facture[ factId=" + factId + " ]";
    }
    
}

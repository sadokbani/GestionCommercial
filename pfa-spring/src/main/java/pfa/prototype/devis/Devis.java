/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pfa.prototype.devis;

import pfa.prototype.commande.Commande;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "devis")
@NamedQueries({
    @NamedQuery(name = "Devis.findAll", query = "SELECT d FROM Devis d")})
public class Devis implements Serializable {


    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "devisId")
    private Integer devisId;
    @Column(name = "dateDevis")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateDevis;

    @Column(name = "total")
    private Float total;

    @JoinColumn(name = "commandeId", referencedColumnName = "commandeId")
    @OneToOne
    private Commande commandeId;

    public Devis() {
    }

    public Devis(Date dateDevis, Float total, Commande commandeId) {
        this.dateDevis = dateDevis;
        this.total = total;
        this.commandeId = commandeId;
    }

    public Integer getDevisId() {
        return devisId;
    }

    public void setDevisId(Integer devisId) {
        this.devisId = devisId;
    }

    public Date getDateDevis() {
        return dateDevis;
    }

    public void setDateDevis(Date dateDevis) {
        this.dateDevis = dateDevis;
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
        hash += (devisId != null ? devisId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Devis)) {
            return false;
        }
        Devis other = (Devis) object;
        if ((this.devisId == null && other.devisId != null) || (this.devisId != null && !this.devisId.equals(other.devisId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "finall.Devis[ devisId=" + devisId + " ]";
    }
    
}

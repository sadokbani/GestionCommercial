/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pfa.prototype.bonsdelivraison;

import pfa.prototype.commande.Commande;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "bonsdelivraison")
@NamedQueries({
    @NamedQuery(name = "Bonsdelivraison.findAll", query = "SELECT b FROM Bonsdelivraison b")})
public class Bonsdelivraison implements Serializable {


    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Basic(optional = false)
    @NotNull
    @Column(name = "livId")
    private Integer livId;
    @Column(name = "dateBonLiv")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateBonLiv;
    @Column(name = "total")
    private Float total;
    @JoinColumn(name = "commandeId", referencedColumnName = "commandeId")
    @OneToOne
    private Commande commandeId;


    public Bonsdelivraison() {
    }

    public Bonsdelivraison(Date dateBonLiv, Float total, Commande commandeId) {
        this.dateBonLiv = dateBonLiv;
        this.total = total;
        this.commandeId = commandeId;

    }

    public Integer getLivId() {
        return livId;
    }

    public void setLivId(Integer livId) {
        this.livId = livId;
    }

    public Date getDateBonLiv() {
        return dateBonLiv;
    }

    public void setDateBonLiv(Date dateBonLiv) {
        this.dateBonLiv = dateBonLiv;
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
        hash += (livId != null ? livId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Bonsdelivraison)) {
            return false;
        }
        Bonsdelivraison other = (Bonsdelivraison) object;
        if ((this.livId == null && other.livId != null) || (this.livId != null && !this.livId.equals(other.livId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "finall.Bonsdelivraison[ livId=" + livId + " ]";
    }
    
}

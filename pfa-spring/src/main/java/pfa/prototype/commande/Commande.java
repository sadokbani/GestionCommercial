/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pfa.prototype.commande;

import pfa.prototype.bonsdelivraison.Bonsdelivraison;
import pfa.prototype.devis.Devis;
import pfa.prototype.facture.Facture;
import pfa.prototype.lignedecommande.Lignedecommande;
import pfa.prototype.user.User;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "commande")
@NamedQueries({
    @NamedQuery(name = "Commande.findAll", query = "SELECT c FROM Commande c")})
public class Commande implements Serializable {


    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    @Column(name = "commandeId")
    private Integer commandeId;
    @Column(name = "date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;
    @Column(name = "etat")
    private Integer etat;

    @JoinColumn(name = "userId", referencedColumnName = "userId")
    @ManyToOne
    private User userId;



    public Commande() {
    }

    public Commande(Date date, Integer etat, User userId) {
        this.date = date;
        this.etat = etat;
        this.userId = userId;

    }

    public Integer getCommandeId() {
        return commandeId;
    }

    public void setCommandeId(Integer commandeId) {
        this.commandeId = commandeId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getEtat() {
        return etat;
    }

    public void setEtat(Integer etat) {
        this.etat = etat;
    }




    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }





    @Override
    public int hashCode() {
        int hash = 0;
        hash += (commandeId != null ? commandeId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Commande)) {
            return false;
        }
        Commande other = (Commande) object;
        if ((this.commandeId == null && other.commandeId != null) || (this.commandeId != null && !this.commandeId.equals(other.commandeId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "finall.Commande[ commandeId=" + commandeId + " ]";
    }
    
}

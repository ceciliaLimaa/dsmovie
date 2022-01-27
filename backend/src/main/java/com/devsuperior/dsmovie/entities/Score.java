package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {
	
	@EmbeddedId
	private ScorePK id = new ScorePK(); 
	//seria necessario 2 chaves porém não é possivel
	//foi criado outra classe com as duas chaves e instanciadas aqui.
	
	private Double value;
	 
	public Score() {
		
	}
	
	public void setMovie(Movie movie) { //serve para informar o filme e associar ao score
		id.setMovie(movie);
	}
	
	public void setUser(User user) {
		id.setUser(user);
	}
	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

}

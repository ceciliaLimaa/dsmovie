package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	 
	//Informar o email,id do filme e avaliação.
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {  //ao inves de retornar void vai retornar movie.
		
		
		//Recuperar usuario do banco pelo email, se n existir inserir no banco.
		
		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) { 				// se for nulo é pq n tinha 
			user = new User(); 				// salva novo usuario
			user.setEmail(dto.getEmail()); 	//setar o email
			user = userRepository.saveAndFlush(user); //Salva no banco /andFlus garante obg atual.
			
		}
		
	
		Movie movie = movieRepository.findById(dto.getMovieId()).get();
		
		//Salvar a avaliaçãop do usuario para o filme.
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		 
		//salva e tras os resultados
		score = scoreRepository.saveAndFlush(score);
		
		//Lista de score associadas ao filme / soma de todas as notas 
		double sum = 0.0;
		for(Score s : movie.getScores()) {
			sum = sum + s.getValue();
		}
		//media das notas
		
		double avg = sum / movie.getScores().size();
		
		//Salvar nova media e contagem
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		movie = movieRepository.save(movie); //salva no banco
		
		return new MovieDTO(movie);	
	
 }
}

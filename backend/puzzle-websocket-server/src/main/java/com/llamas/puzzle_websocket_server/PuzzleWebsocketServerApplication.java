package com.llamas.puzzle_websocket_server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.redis.RedisAutoConfiguration;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;

@SpringBootApplication(exclude = {
	WebMvcAutoConfiguration.class,
	RedisAutoConfiguration.class})
	
public class PuzzleWebsocketServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(PuzzleWebsocketServerApplication.class, args);
	}

}

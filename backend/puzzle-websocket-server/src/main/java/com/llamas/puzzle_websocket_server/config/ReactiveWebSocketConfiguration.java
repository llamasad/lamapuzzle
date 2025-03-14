package com.llamas.puzzle_websocket_server.config;
import java.util.HashMap;
import java.util.Map;

import com.llamas.puzzle_websocket_server.handler.ReactiveWebSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.HandlerMapping;
import org.springframework.web.reactive.handler.SimpleUrlHandlerMapping;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.server.WebSocketService;
import org.springframework.web.reactive.socket.server.support.HandshakeWebSocketService;
import org.springframework.web.reactive.socket.server.support.WebSocketHandlerAdapter;
import org.springframework.web.reactive.socket.server.upgrade.ReactorNettyRequestUpgradeStrategy;

@Configuration
public class ReactiveWebSocketConfiguration {

    @Autowired
    @Qualifier("ReactiveWebSocketHandler")
    private ReactiveWebSocketHandler reactiveWebSocketHandler;

    @Bean
    public HandlerMapping reactiveWebSocketHandlerMapping() {
        Map<String, WebSocketHandler> map = new HashMap<>();
        map.put("/event-emitter/{lobbyId}", reactiveWebSocketHandler);

        SimpleUrlHandlerMapping handlerMapping = new SimpleUrlHandlerMapping();
        handlerMapping.setOrder(-1);
        handlerMapping.setUrlMap(map);
        return handlerMapping;
    }

    @Bean
    public WebSocketHandlerAdapter handlerAdapter() {
        return new WebSocketHandlerAdapter(webSocketService());
    }

    @Bean
    public WebSocketService webSocketService() {
        ReactorNettyRequestUpgradeStrategy reactorNettyRequestUpgradeStrategy = new ReactorNettyRequestUpgradeStrategy();
        return new HandshakeWebSocketService(reactorNettyRequestUpgradeStrategy);
    }

    // @Bean
    // public ServerEndpointExporter serverEndpointExporter() {
    //     ServerEndpointExporter serverEndpointExporter = new ServerEndpointExporter();

    //     /**
    //      * Add one or more classes annotated with `@ServerEndpoint`.
    //      */
    //     serverEndpointExporter.setAnnotatedEndpointClasses(WebSocketController.class);

    //     return serverEndpointExporter;
    // }
}
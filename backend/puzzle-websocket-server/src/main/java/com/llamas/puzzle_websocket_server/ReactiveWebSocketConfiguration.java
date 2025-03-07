package com.llamas.puzzle_websocket_server;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.HandlerMapping;
import org.springframework.web.reactive.handler.SimpleUrlHandlerMapping;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.server.WebSocketService;
import org.springframework.web.reactive.socket.server.support.HandshakeWebSocketService;
import org.springframework.web.reactive.socket.server.upgrade.TomcatRequestUpgradeStrategy;
import org.springframework.web.reactive.socket.server.support.WebSocketHandlerAdapter;

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
        TomcatRequestUpgradeStrategy tomcatRequestUpgradeStrategy = new TomcatRequestUpgradeStrategy();
        tomcatRequestUpgradeStrategy.setMaxSessionIdleTimeout(10000L);
        tomcatRequestUpgradeStrategy.setAsyncSendTimeout(10000L);
        return new HandshakeWebSocketService(tomcatRequestUpgradeStrategy);
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
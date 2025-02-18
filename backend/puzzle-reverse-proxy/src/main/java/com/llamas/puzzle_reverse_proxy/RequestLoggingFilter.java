package com.llamas.puzzle_reverse_proxy;

import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class RequestLoggingFilter implements GlobalFilter {

    private static final Logger logger = LoggerFactory.getLogger(RequestLoggingFilter.class);

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, org.springframework.cloud.gateway.filter.GatewayFilterChain chain) {
        // Log the original request URL
        String originalUrl = exchange.getRequest().getURI().toString();
        logger.info("Incoming request URL: {}", originalUrl);

        // Proceed with the filter chain and log after forwarding
        return chain.filter(exchange).then(Mono.fromRunnable(() -> {
            String forwardedUrl = exchange.getAttribute("org.springframework.cloud.gateway.support.ServerWebExchangeUtils.gatewayRequestUrlAttribute");
            if (forwardedUrl != null) {
                logger.info("Forwarded request URL: {}", forwardedUrl);
            }
        }));
    }
}

package com.llamas.puzzle_bff_server;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.Authentication;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @GetMapping("/me")
    public Object getUser(@AuthenticationPrincipal OAuth2AuthenticationToken authentication,Authentication authentication2) {
        System.out.println(authentication2);
        if (authentication == null) {
            return "User is not logged in";
        }
        return authentication.getPrincipal().getAttributes();
    }
}

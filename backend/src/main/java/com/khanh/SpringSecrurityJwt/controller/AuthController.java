package com.khanh.SpringSecrurityJwt.controller;

import com.khanh.SpringSecrurityJwt.dto.AuthRequest;
import com.khanh.SpringSecrurityJwt.dto.AuthResponse;
import com.khanh.SpringSecrurityJwt.dto.RegisterRequest;
import com.khanh.SpringSecrurityJwt.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> authenticate(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(service.authenticate(request));
    }


}

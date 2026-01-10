package com.khanh.SpringSecrurityJwt.service;


import com.khanh.SpringSecrurityJwt.dto.AuthRequest;
import com.khanh.SpringSecrurityJwt.dto.AuthResponse;
import com.khanh.SpringSecrurityJwt.dto.RegisterRequest;
import com.khanh.SpringSecrurityJwt.model.Role;
import com.khanh.SpringSecrurityJwt.model.User;
import com.khanh.SpringSecrurityJwt.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    // create user
    public AuthResponse register(RegisterRequest request) {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        repository.save(user); // create user

        // generate new token
        var jwtToken = jwtService.generateToken(user);

        // return token
        return AuthResponse.builder().token(jwtToken).build();
    }



    public AuthResponse authenticate(AuthRequest request) {

        // call authenticationManager.authenticate() to check credentials
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        // if correct, fetch user and return new token
        var user = repository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder().token(jwtToken).build();
    }
}

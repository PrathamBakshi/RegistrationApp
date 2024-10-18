package com.example.registration.service;

import com.example.registration.model.Registration;
import com.example.registration.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    public Registration createRegistration(Registration registration) {
        return registrationRepository.save(registration);
    }

    public Registration getRegistrationById(Long id) {
        return registrationRepository.findById(Math.toIntExact(id)).orElse(null);
    }

    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }

    public Registration updateRegistration(Long id, Registration registration) {
        if (registrationRepository.existsById(Math.toIntExact(id))) {
            registration.setId(Math.toIntExact(id));
            return registrationRepository.save(registration);
        }
        return null;
    }

    public boolean deleteRegistration(Long id) {
        if (registrationRepository.existsById(Math.toIntExact(id))) {
            registrationRepository.deleteById(Math.toIntExact(id));
            return true;
        }
        return false;
    }
}

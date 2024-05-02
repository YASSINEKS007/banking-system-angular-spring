package ma.enset.backend.web;

import lombok.AllArgsConstructor;
import ma.enset.backend.dtos.CustomerDTO;
import ma.enset.backend.entities.Customer;
import ma.enset.backend.exceptions.CustomerNotFoundException;
import ma.enset.backend.services.BankService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@AllArgsConstructor
public class CustomerRestController {
    private BankService bankService;

    @GetMapping(path = "/customers")
    public List<CustomerDTO> getCustomersDTO() {
        return bankService.getCustomersDTO();
    }

    @GetMapping(path = "/customers/{id}")
    public CustomerDTO getCustomersDTO(@PathVariable Long id) throws CustomerNotFoundException {
        return bankService.getCustomerDTO(id);
    }

    @PostMapping(path = "/add-customer")
    public CustomerDTO saveCustomerDTO(@RequestBody CustomerDTO customerDTO) {
        return bankService.saveCustomerDTO(customerDTO);
    }

    @PutMapping(path = "/update-customer/{id}")
    public CustomerDTO updateCustomer(@PathVariable Long id, @RequestBody CustomerDTO customerDTO) throws CustomerNotFoundException {
        return bankService.updateCustomerDTO(id, customerDTO);
    }

    @DeleteMapping(path = "/delete-customer/{id}")
    public void deleteCustomer(@PathVariable Long id) {
        System.out.println(id);
        bankService.deleteCustomer(id);
    }

}

package ma.enset.backend.web;

import lombok.AllArgsConstructor;
import ma.enset.backend.dtos.AccountHistoryDTO;
import ma.enset.backend.dtos.AccountOperationDTO;
import ma.enset.backend.dtos.BankAccountDTO;
import ma.enset.backend.exceptions.BankAccountNotFoundException;
import ma.enset.backend.services.BankService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@AllArgsConstructor
public class BankAccountRestController {
    private BankService bankService;

    @GetMapping("/bank-accounts")
    @PreAuthorize("hasAuthority('SCOPE_USER')")
    public List<BankAccountDTO> getAllBankAccounts() {
        return bankService.getBankAccountsDTO();
    }

    @GetMapping("/bank-accounts/userId/{id}")
    @PreAuthorize("hasAuthority('SCOPE_USER')")
    public List<BankAccountDTO> getBankAccountByUserId(@PathVariable Long id) {
        return bankService.findBankAccountsByCustomerIdDTO(id);
    }

    @GetMapping("/bank-accounts/{id}")
    public BankAccountDTO getBankAccount(@PathVariable String id) throws BankAccountNotFoundException {
        return bankService.getBankAccountDTO(id);
    }

    @GetMapping("/accounts-by-id/{id}")
    @PreAuthorize("hasAuthority('SCOPE_USER')")
    public List<String> getBanAccountsIdsFromCustomerId(@PathVariable Long id){
        return bankService.findBankAccountIdsByCustomerId(id);
    }

    @GetMapping("/account-operations/{id}")
    public List<AccountOperationDTO> getAccountOperationsHistoryDTO(@PathVariable String id) throws BankAccountNotFoundException {
        return bankService.accountOperationsHistoryDTO(id);
    }

    @GetMapping("/account-operations/history/{id}")
    public AccountHistoryDTO getAccountHistoryDTO(@PathVariable String id) throws BankAccountNotFoundException {
        return bankService.getAccountHistoryDTO(id);
    }
}

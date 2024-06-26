package ma.enset.backend.mappers;

import ma.enset.backend.dtos.*;
import ma.enset.backend.entities.*;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class BankMapper {
    public CustomerDTO fromCustomer(Customer customer) {
        CustomerDTO customerDTO = new CustomerDTO();
        BeanUtils.copyProperties(customer, customerDTO);
        return customerDTO;
    }

    public Customer fromCustomerDTO(CustomerDTO customerDTO) {
        Customer customer = new Customer();
        BeanUtils.copyProperties(customerDTO, customer);
        return customer;
    }

    public SavingAccountDTO fromSavingBankAccount(SavingAccount savingAccount) {
        SavingAccountDTO savingBankAccountDTO = new SavingAccountDTO();
        savingBankAccountDTO.setType("SA");
        BeanUtils.copyProperties(savingAccount, savingBankAccountDTO);
        savingBankAccountDTO.setCustomerDTO(fromCustomer(savingAccount.getCustomer()));
        return savingBankAccountDTO;
    }

    public SavingAccount fromSavingBankAccountDTO(SavingAccountDTO savingBankAccountDTO) {
        SavingAccount savingAccount = new SavingAccount();
        BeanUtils.copyProperties(savingBankAccountDTO, savingAccount);
        savingAccount.setCustomer(fromCustomerDTO(savingBankAccountDTO.getCustomerDTO()));
        return savingAccount;
    }

    public CurrentAccountDTO fromCurrentBankAccount(CurrentAccount currentAccount) {
        CurrentAccountDTO currentBankAccountDTO = new CurrentAccountDTO();
        currentBankAccountDTO.setType("CA");
        BeanUtils.copyProperties(currentAccount, currentBankAccountDTO);
        currentBankAccountDTO.setCustomerDTO(fromCustomer(currentAccount.getCustomer()));
        return currentBankAccountDTO;
    }

    public CurrentAccount fromCurrentBankAccountDTO(CurrentAccountDTO currentBankAccountDTO) {
        CurrentAccount currentAccount = new CurrentAccount();
        BeanUtils.copyProperties(currentBankAccountDTO, currentAccount);
        currentAccount.setCustomer(fromCustomerDTO(currentBankAccountDTO.getCustomerDTO()));
        return currentAccount;
    }

    public BankAccountDTO fromBankAccount(BankAccount bankAccount) {
        if (bankAccount instanceof SavingAccount) {
            return fromSavingBankAccount((SavingAccount) bankAccount);
        } else {
            return fromCurrentBankAccount((CurrentAccount) bankAccount);
        }
    }


    public AccountOperationDTO fromAccountOperation(AccountOperation accountOperation){
        AccountOperationDTO accountOperationDTO=new AccountOperationDTO();
        BeanUtils.copyProperties(accountOperation,accountOperationDTO);
        return accountOperationDTO;
    }
}

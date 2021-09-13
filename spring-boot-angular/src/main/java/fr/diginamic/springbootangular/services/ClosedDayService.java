package fr.diginamic.springbootangular.services;

import fr.diginamic.springbootangular.entities.ClosedDay;
import fr.diginamic.springbootangular.repositories.ClosedDayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClosedDayService {
    @Autowired
    ClosedDayRepository closedDayRepository;

    /**
     * Return all closedDays in database
     * @return
     */
    public List<ClosedDay> closedDays(){
        return closedDayRepository.findAll();
    }

    /**
     * Return a closed day from its id
     * @param id
     * @return
     */
    public ClosedDay getClosedDayById(Long id){
        Optional<ClosedDay> closedDayGet = closedDayRepository.findById(id);
        if(closedDayGet.isPresent()){
            return closedDayGet.get();
        }
        else  {
            System.err.println("No closed day found with this id");
            return null;
        }
    }
    /**
     * Return all closed days of the given category
     * @param category
     * @return
     */
    public List<ClosedDay> getByCategory(ClosedDay.Category category){
        return closedDayRepository.findByCategory(category);
    }

    /**
     * Add new closed day to database
     * @param closedDay
     */
    public void addClosedDay(ClosedDay closedDay){
        // 1 - We check if the closed day not already exist in database
        Optional<ClosedDay> dayAlreadyIn = closedDayRepository.findByDate(closedDay.getDate());
        if(dayAlreadyIn.isPresent()){
            System.out.println("This closed day already exist in database");
        }
        else {
            // 2 - We save the new closed day in the database
            closedDayRepository.save(closedDay);
            System.out.println(closedDay.getDate() + "added to closed days");
        }
    }

    /**
     * Update closedDay in Database
     * @param closedDay
     * @param closedDayId
     */
    public void updateClosedDay(ClosedDay closedDay, Long id){
        //1 - We get the closedDay already exist in database by Id
        Optional<ClosedDay> closedDayById = closedDayRepository.findById(closedDay.getId());
         if(closedDayById.isPresent()){
             ClosedDay closedDayUpdate = closedDayById.get();
             closedDayUpdate.setDate(closedDay.getDate());
             closedDayUpdate.setCategory(closedDay.getCategory());
             closedDayUpdate.setJour(closedDay.getJour());
             closedDayUpdate.setCommentaire(closedDay.getCommentaire());
         }
         else{
             System.out.println("No closedDay corresponding to this id in database" );
         }

    }

    /**
     * Remove closed day from database
     * @param id
     */
    public void deleteClosedDay(long id){
        closedDayRepository.deleteById(id);
    }
}

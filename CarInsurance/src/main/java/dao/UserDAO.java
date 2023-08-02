package dao;
import java.util.List;

import enities.User;
public interface UserDAO {
	
	public void insertUser(User us);
	public User getUserDetails(int user_id);
	public List<User> getAllUser();
	public void deleteUser(int user_id);
	public void updateUser( int user_id);
	
	
	
}

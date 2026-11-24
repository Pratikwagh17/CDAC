package example.dao;

public interface AppDao<T,ID> {
	T getByID(ID identity);
}

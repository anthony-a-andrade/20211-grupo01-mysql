package com.fatec.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.model.*;
import com.fatec.repository.*;

@Service
public class VendaService implements BaseService<Venda, Integer> {
	@Autowired
	private VendaRepository vr;

	@Autowired
	private ProdutoRepository pr;

	@Autowired
	private ClienteRepository cr;

	@Override
	public int getPageCount() { return vr.getPageCount(); }

	@Override
	public List<Venda> getPage(int page) { return vr.getPage((page - 1) * 10); }

	@Override
	public String save(Venda venda) {
		vr.save(venda);
		return "redirect:/vendas/1";
	}

	@Override
	public String delete(Integer id) {
		if (vr.existsById(id)) vr.deleteById(id);
		return "redirect:/vendas/1";
	}

	@Override
	public Venda find(Integer id) { return vr.findById(id).orElse(null); }

	public Iterable<Cliente> findAllClients() { return cr.findAll(); }

	public Iterable<Produto> findAllProducts() { return pr.findAll(); }

	@Override
	public String update(Integer id, Venda venda) {
		venda.setIdVenda(id);	
		return save(venda);
	}

	public int getNewID() {
		var ultimo = vr.getLast();
		return ultimo == null ? 0 : ultimo.getIdVenda() + 1;
	}
}

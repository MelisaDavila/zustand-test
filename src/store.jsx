import create from 'zustand'

export const usePallets = create((set) => ({
    pallets: [],
    addPallet:(pallet) => set((state)=> ({ pallets: [...state.pallets, {id: pallet.id, name: pallet.name }]})),
    editPallet: (pallet) => set((state) => ({ pallets: state.pallets.map((p) => (p.id === pallet.id ? { ...p, name: pallet.name } : p) ) })),
}));



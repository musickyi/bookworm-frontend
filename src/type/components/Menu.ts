interface SidebarProps {
    $isOpen: boolean;
}

interface ToggleButtonProps {
    id: number;
    $isOpen: boolean;
    selectedToggle?: string | null;
}

interface BookCaseButtonProps {
    onClick: () => void;
    $isOpen: boolean;
    label: string;
  }

interface MyList{
    id:number;
    title:string;
}